import {createApp} from '../server/index.mjs';
const handler=createApp();
// Vercel rewrites preserve the remaining query string (for example workspace).
export default function dispatch(req,res){
 const parsed=new URL(req.url,'http://localhost');
 const route=req.query?.__dsRoute??parsed.searchParams.get('__dsRoute');
 if(typeof route!=='string'||!['config','connectors','me','workspaces','versions','render','uploads','publish','checkout','store/listings','mcp'].includes(route)){res.statusCode=404;res.end('Unknown endpoint');return;}
 parsed.searchParams.delete('__dsRoute');
 req.url=(route==='mcp'?'/mcp':'/api/'+route)+(parsed.searchParams.size?'?'+parsed.searchParams.toString():'');
 return handler(req,res);
}
