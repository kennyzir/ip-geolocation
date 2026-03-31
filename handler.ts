// ClawHub Local Skill - runs entirely in your agent, no API key required
// IP Geolocation - Get country, city, ISP, timezone, proxy flag from IP

function isValidIp(ip: string): boolean {
  const v4 = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (v4.test(ip)) return ip.split('.').every(n => parseInt(n) >= 0 && parseInt(n) <= 255);
  return /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/.test(ip);
}

function isPrivateIp(ip: string): boolean {
  const p = ip.split('.').map(Number);
  return p[0] === 10 || (p[0] === 172 && p[1] >= 16 && p[1] <= 31) || (p[0] === 192 && p[1] === 168) || p[0] === 127;
}

export async function run(input: { ip: string }) {
  if (!input.ip || typeof input.ip !== 'string') throw new Error('ip is required');
  if (!isValidIp(input.ip)) throw new Error('Invalid IP address format');
  if (isPrivateIp(input.ip)) {
    return {
      ip: input.ip, country: null, country_code: null, region: null, city: null,
      zip: null, latitude: null, longitude: null, timezone: null,
      isp: 'Private Network', org: null, as_number: null, is_proxy: false, is_mobile: false,
      note: 'Private/reserved IP address',
      _meta: { skill: 'ip-geolocation', latency_ms: 0 },
    };
  }
  const startTime = Date.now();
  const response = await fetch(
    `http://ip-api.com/json/${input.ip}?fields=status,message,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,org,as,proxy,mobile`,
    { signal: AbortSignal.timeout(5000) }
  );
  const data = await response.json();
  if (data.status === 'fail') throw new Error(`Geolocation failed: ${data.message}`);
  return {
    ip: input.ip, country: data.country || null, country_code: data.countryCode || null,
    region: data.regionName || null, city: data.city || null, zip: data.zip || null,
    latitude: data.lat || null, longitude: data.lon || null, timezone: data.timezone || null,
    isp: data.isp || null, org: data.org || null, as_number: data.as || null,
    is_proxy: data.proxy || false, is_mobile: data.mobile || false,
    _meta: { skill: 'ip-geolocation', latency_ms: Date.now() - startTime },
  };
}
export default run;
