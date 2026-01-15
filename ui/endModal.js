import MetricsLogger from '../systems/MetricsLogger.js';

function downloadCSV() {
  const events = MetricsLogger.getAll();

  if (!events.length) {
    alert('No metrics recorded');
    return;
  }

  const headers = [
    'sessionId',
    'event',
    'value',
    'timeRemaining',
    'timestamp',
    'screen',
    'language',
    'platform',
    'userAgent'
  ];

  const rows = events.map(e => [
    e.sessionId,
    e.event,
    e.value ?? '',
    e.timeRemaining,
    new Date(e.timestamp).toISOString(),
    e.device.screen,
    e.device.language,
    e.device.platform,
    e.device.userAgent.replace(/,/g, ' ') // CSV safety
  ]);

  const csv =
    headers.join(',') + '\n' +
    rows.map(r => r.join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  // � THIS NEVER FAILS
  window.open(url, '_blank');

  // optional cleanup (safe delay)
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

window.downloadCSV = downloadCSV;

export function showEndModal() {
  const modal = document.getElementById('end-modal');
  modal.classList.remove('hidden');

  const btn = document.getElementById('download-csv');
  btn.onclick = downloadCSV;
}