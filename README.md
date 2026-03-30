# "IP Geolocation"

> Get country, city, ISP, timezone, and proxy/VPN flag from any IP address. Use when agents need fraud detection, geo-targeting, analytics enrichment, or access control. Handles IPv4 and IPv6, detects private/reserved ranges.

[![License: MIT-0](https://img.shields.io/badge/License-MIT--0-blue.svg)](LICENSE)
[![Claw0x](https://img.shields.io/badge/Powered%20by-Claw0x-orange)](https://claw0x.com)
[![OpenClaw Compatible](https://img.shields.io/badge/OpenClaw-Compatible-green)](https://openclaw.org)

## What is This?

This is a native skill for **OpenClaw** and other AI agents. Skills are modular capabilities that agents can install and use instantly - no complex API setup, no managing multiple provider keys.

Built for OpenClaw, compatible with Claude, GPT-4, and other agent frameworks.

## Installation

### For OpenClaw Users

Simply tell your agent:

```
Install the ""IP Geolocation"" skill from Claw0x
```

Or use this connection prompt:

```
Add skill: ip-geolocation
Platform: Claw0x
Get your API key at: https://claw0x.com
```

### For Other Agents (Claude, GPT-4, etc.)

1. Get your free API key at [claw0x.com](https://claw0x.com) (no credit card required)
2. Add to your agent's configuration:
   - Skill name: `ip-geolocation`
   - Endpoint: `https://claw0x.com/v1/call`
   - Auth: Bearer token with your Claw0x API key

### Via CLI

```bash
npx @claw0x/cli add ip-geolocation
```

---


# IP Geolocation

Look up geographic and network information for any IP address. Returns country, city, region, ISP, timezone, coordinates, and proxy/VPN/mobile flags.

## How It Works

1. Validate IP format (IPv4 and IPv6 supported)
2. Detect private/reserved ranges (127.x, 10.x, 192.168.x) — returns immediately
3. Query geolocation service with 5s timeout
4. Return structured result with all available fields

## Use Cases

- Fraud detection (flag proxy/VPN users)
- Geo-targeting (serve localized content)
- Analytics enrichment (add location to events)
- Access control (region-based restrictions)
- Security monitoring (detect suspicious origins)

## Prerequisites

1. **Sign up at [claw0x.com](https://claw0x.com)**
2. **Create API key** in Dashboard
3. **Set environment variable**: `export CLAW0X_API_KEY="ck_live_..."`

## Pricing

**FREE.** No charge per call.

- Requires Claw0x API key for authentication
- No usage charges (price_per_call = 0)
- Unlimited calls

## Example

**Input**:
```json
{
  "ip": "8.8.8.8"
}
```

**Output**:
```json
{
  "ip": "8.8.8.8",
  "country": "United States",
  "country_code": "US",
  "region": "Virginia",
  "city": "Ashburn",
  "zip": "20149",
  "latitude": 39.03,
  "longitude": -77.5,
  "timezone": "America/New_York",
  "isp": "Google LLC",
  "org": "Google Public DNS",
  "is_proxy": false,
  "is_mobile": false
}
```

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Invalid IP format or lookup failed |
| 401 | Missing or invalid API key |
| 500 | Geolocation service error (not billed) |

## About Claw0x

[Claw0x](https://claw0x.com) is the native skills layer for AI agents.

**GitHub**: [github.com/kennyzir/ip-geolocation](https://github.com/kennyzir/ip-geolocation)


---

## About Claw0x

Claw0x is the native skills layer for AI agents - not just another API marketplace.

**Why Claw0x?**
- **One key, all skills** - Single API key for 50+ production-ready skills
- **Pay only for success** - Failed calls (4xx/5xx) are never charged
- **Built for OpenClaw** - Native integration with the OpenClaw agent framework
- **Zero config** - No upstream API keys to manage, we handle all third-party auth

**For Developers:**
- [Browse all skills](https://claw0x.com/skills)
- [Sell your own skills](https://claw0x.com/docs/sell)
- [API Documentation](https://claw0x.com/docs/api-reference)
- [OpenClaw Integration Guide](https://claw0x.com/docs/openclaw)

## Links

- [Claw0x Platform](https://claw0x.com)
- [OpenClaw Framework](https://openclaw.org)
- [Skill Documentation](https://claw0x.com/skills/ip-geolocation)
