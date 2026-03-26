# Newsletter Page — Milestone 1

## Vision
A `/newsletter` page that serves as a centralized, service-switchable offer page for ad campaigns. Instead of modifying individual service pages (hvac, water-heater, etc.) when an offer changes, you update a single config file and point your ad to `/newsletter?service=hvac` (or the relevant service).

## Goals
- Single `/newsletter?service=<key>` URL pattern for all offer campaigns
- Offer content (hero title/text, offer cards, secondary hero text) defined in one config file
- Non-offer page content (avoid headaches, features, testimonials, process, certifications) mirrors the corresponding service page

## Supported Services
- `hvac` → HVAC page content + HVAC form
- `water-heater` → Water Heater page content + WH form
- `hvac-tune-up` → HVAC Tune-up page content + TU form
- `furnace-service` → Furnace Service page content + Furnace form

## Constraints
- Never rename or modify existing service page components
- Config-driven offer content only; structural/layout changes require new components
