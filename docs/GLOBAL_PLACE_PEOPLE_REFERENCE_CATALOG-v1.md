# Global Place + People Reference Catalog v1.0

**Status:** Architecture approved for implementation planning  
**Date:** 2026-10-04  
**Systems:** VisionWeaver | Design Studio, VisionWeaver, MASTER_CEO_DASHBOARD  
**Purpose:** Build a worldwide, provenance-aware reference catalog for believable locations, environments, crowds, cultures, architecture, weather, transport, lodging, events, and avatar population design.

## Core rule

The catalog may discover from the broad public web, travel platforms, maps, booking platforms, cruise/destination sites, social platforms, tourism sites, photography communities, and open geographic sources. **Discovery does not equal permission to ingest, train on, redistribute, or commercially reuse.** Every source and asset must be classified before it enters a reusable training/reference pool.

Attribution is mandatory where required, but attribution alone does not create a license.

## Catalog layers

### 1. Place Registry
Canonical geographic identity:
- country, region/state/province, city, neighborhood, district
- latitude/longitude or authorized place identifier
- aliases and local-language names
- timezone, climate zone, elevation and coastal/inland classification
- architecture families, density, street patterns and public-space types
- transit modes, road conventions, signage conventions and utility patterns
- landmark types and skyline characteristics
- seasonality, daylight patterns, weather patterns and vegetation
- common ambient sound signatures
- day/night population patterns
- source confidence and last verification date

### 2. Environment Reference Library
References for:
- streets, alleys, plazas, parks, beaches, mountains, rivers and waterfronts
- airports, stations, ports, cruise terminals, highways and transit interiors
- hotels, resorts, hostels, restaurants, bars, stores and markets
- residential interiors/exteriors
- schools, hospitals, civic buildings, churches, mosques, temples and cultural spaces
- offices, warehouses, factories and logistics spaces
- festivals, sporting environments, conferences and nightlife
- weather, seasonal, lighting and atmosphere studies

### 3. Population Reference Library
Used to create original avatars and crowd templates, not to clone identifiable people without permission:
- age bands
- body sizes and shapes
- skin-tone ranges
- hair textures/styles
- facial-feature diversity
- mobility aids/disability representation
- clothing by climate, occupation, occasion and local norms
- footwear and accessory patterns
- commuting behavior
- family/group structures
- crowd density and interaction patterns
- locally plausible casting mixes

Do not create a rule that a person “from” a city must have a particular race, face, body, religion or ethnicity. Location-specific casting is probabilistic and evidence-backed, with variation preserved.

### 4. Activity + Behavior Library
- commuting
- shopping
- dining
- nightlife
- festivals
- worship/cultural gatherings
- tourism
- school arrival/dismissal
- work shifts
- port/cruise activity
- sports and recreation
- neighborhood street life
- phone use, strollers, bikes, scooters, taxis, buses and ride-share patterns

### 5. World Sensory Layer
- traffic
- horns
- trains
- aircraft
- water
- wind
- insects
- birds
- crowd beds
- construction
- garbage/service trucks
- emergency vehicles
- announcements
- phones
- children/babies
- venue-specific ambience

## Source federation

### Tier A — preferred reusable/open sources
Use when item-level license permits the intended use:
- OpenStreetMap / ODbL geographic data
- Wikimedia Commons / item-level public-domain or free-license media
- Flickr / item-level Creative Commons media
- Mapillary / licensed street-level imagery subject to its current terms
- public-domain government imagery and datasets
- government GIS/open-data portals
- public-domain archives, libraries and museums
- explicitly licensed tourism-board media kits
- creator-direct uploads with documented permission
- user-owned photography and production references

### Tier B — API/partner sources; use only inside granted scope
Examples:
- Booking.com Demand API
- Expedia/Rapid or other official partner APIs
- Priceline partner products
- airline/hotel/cruise partner feeds
- commercial POI, weather and mobility APIs

Store the provider's content-rights class, allowed display/storage period, caching rules, attribution requirements, commercial permissions and whether ML/training use is permitted.

### Tier C — lookup/reference-only sources
Examples include providers whose standard terms restrict scraping, database building, derivative extraction or training:
- Google Maps / Street View
- Apple Maps
- many hotel, cruise, airline and travel websites
- many social networks
- ordinary user-uploaded travel photos with no explicit reuse license

These sources can help humans or authorized runtime lookups validate what a location looks like, discover names, or provide links, but their content must not automatically enter the training corpus.

## Travel and discovery coverage

The discovery adapter registry should cover:
- Google Maps / Street View
- Apple Maps
- OpenStreetMap
- Mapillary
- Waze
- Booking.com
- Priceline
- Expedia
- Hotels.com
- Agoda
- Trip.com
- Tripadvisor
- Airbnb / Vrbo when terms permit the intended integration
- Hostelworld
- Google Travel / Flights only within permitted product terms
- airline destination pages
- airport and transit authority sites
- rail operators
- cruise lines and port authorities
- official tourism boards
- Meetup and event platforms
- convention and venue sites
- museum/attraction sites
- restaurant discovery platforms
- weather and climate services
- national/state/local open-data and GIS systems
- UNESCO and cultural heritage sources
- Wikimedia/Wikipedia
- Flickr and other license-aware photography repositories
- social networks for link-level discovery and trend/context signals, not unlicensed bulk harvesting

This registry is extensible: any human-accessible travel/reference source can be added once a source policy exists.

## Source Policy Record

Every source gets:
- source_id
- provider
- source_type
- homepage
- API/partner endpoint if applicable
- terms URL
- license URL
- attribution template
- access method: API / embed / browser-link / import / upload
- discovery_allowed
- metadata_storage_allowed
- image_storage_allowed
- video_storage_allowed
- caching window
- commercial_reuse_allowed
- derivative_use_allowed
- AI_training_allowed
- AI_evaluation_allowed
- face/biometric_use_allowed
- redistribution_allowed
- required_clickthrough
- geographic restrictions
- privacy restrictions
- last_terms_reviewed_at
- policy_version
- reviewer
- notes

Default is **deny** until classified.

## Asset Provenance Record

Every individual reference stores:
- asset_id
- source_id
- original URL
- canonical source URL
- source creator/uploader
- title/description
- capture date if known
- ingestion date
- place_id
- approximate coordinates where lawful
- license
- license version
- attribution text
- required links
- rights class
- model/property-release status if known
- identifiable_people flag
- minors_possible flag
- trademarks/logos flag
- sensitive-location flag
- allowed purposes
- expiration/refresh date
- evidence snapshot/hash
- derived-asset lineage
- human review status

## Rights classes

- **GREEN — reusable/training eligible:** explicit license/contract permits intended commercial/derivative/ML use.
- **BLUE — reusable reference, no training:** permitted display/reference/derivative scope, but no ML training.
- **YELLOW — runtime lookup only:** may query/embed/link under provider terms; do not retain as corpus.
- **ORANGE — manual research only:** human can review to understand a place; system stores link/notes only.
- **RED — blocked:** license, privacy, safety or terms prohibit intended use or rights are unknown.

## People and social-media policy

Publicly viewable does not mean reusable.

For identifiable people:
- use social posts primarily to understand crowd composition, clothing context, activities and environment;
- do not use a recognizable person as a character identity template unless rights/consent support that use;
- do not build face-recognition, biometric identity or person-tracking datasets from this catalog;
- when possible, derive non-identifying descriptors and discard unlicensed image copies;
- special review is required where minors are visible.

For avatar creation, combine population-level observations, open demographic statistics, costume/climate research and licensed/non-identifiable references to generate **new people**, rather than cloning a particular traveler or resident.

## Location Pack output

A production-ready location pack should contain:
1. Canonical Place Card
2. Geography + map anchors
3. Architecture board
4. Street/public-space board
5. Interiors board
6. Transport board
7. Local population/casting board
8. Wardrobe board
9. Food/retail/street-object board
10. Weather + seasonal board
11. Day/night lighting board
12. Ambient audio board
13. Animals/birds/insects board
14. Signage/language board
15. Event/crowd board
16. Camera reference board
17. Source/rights manifest
18. Confidence + unresolved questions

## Example: Mumbai

A Mumbai pack should not be “Indian people + famous landmark.” It should model multiple neighborhoods and economic contexts, monsoon/non-monsoon conditions, dense transit, suburban rail, taxis/autorickshaws where appropriate, coastline, markets, high-rise districts, older streets, religious/cultural variety, clothing ranges, languages/signage, work/leisure patterns, birds/animals, sound beds and time-of-day changes. The final casting library must preserve wide variation rather than reducing residents to a single visual stereotype.

The same depth applies to Chicago, Atlanta, Houston and every other supported place.

## Retrieval flow

```
User chooses place
  -> Place Registry resolves canonical area
  -> Source Router selects permitted providers
  -> Rights Gate evaluates each candidate
  -> Reference Normalizer extracts allowed metadata/visual reference
  -> Location Intelligence Engine tags environment/population/activity
  -> Diversity + stereotype check
  -> Continuity Engine builds production anchors
  -> Human approval where required
  -> Versioned Location Pack
  -> Scene Builder / Avatar Catalog / Stock Catalog
```

## Product integration

### Design Studio
Add:
- Places
- World Catalog
- Location Pack Builder
- Reference Sources
- Rights/Attribution
- People & Crowd Templates
- Environment Presets
- Source Confidence

### VisionWeaver
Consume approved Location Packs in Scene Builder. Each scene pins a location-pack version, date/season/time, environment state, population profile and rights manifest.

### Stock Catalog
Store reusable licensed assets separately from lookup-only references. A visible badge must show GREEN/BLUE/YELLOW/ORANGE/RED rights state.

### CEO Dashboard
Surface:
- source coverage
- rights exceptions
- stale terms
- unverified assets
- geographic coverage
- pack approval status
- high-risk ingestion attempts

## Non-negotiable guardrails

1. No “we credited it, therefore we can use it” rule.
2. No bulk scraping provider content where terms prohibit it.
3. No Google Maps/Apple Maps imagery or data used to train models unless a separate contract explicitly permits the exact use.
4. No unlicensed social-photo corpus.
5. No identifiable-person cloning by default.
6. No location stereotype shortcuts.
7. Every generated world/character may trace back to a versioned evidence and rights manifest.
8. Provider terms are time-sensitive; refresh and reclassify them.
