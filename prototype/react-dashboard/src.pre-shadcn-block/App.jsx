import { useState } from 'react'
import './App.css'

const requests = [
  { title: 'Parking reimbursement', id: 'REIM-000041', meta: 'Bukti perlu diperbaiki', status: 'Revision', amount: 'Rp 1.250.000', tone: 'revision', next: 'Perbaiki bukti transaksi' },
  { title: 'Creator fee · Ramadan', id: 'PAY-000018', meta: 'Menunggu Finance', status: 'Pending', amount: 'Rp 4.500.000', tone: 'pending', next: 'Menunggu validasi Finance' },
]
const recent = [
  { title: 'Office supplies', id: 'REIM-000038', meta: '24 Okt 2026', status: 'Paid', amount: 'Rp 860.000', tone: 'paid' },
  { title: 'Overtime · Batch 3', id: 'OT-000012', meta: '22 Okt 2026', status: 'Finance Approved', amount: 'Rp 420.000', tone: 'approved' },
]

function Status({ tone, children }) { return <span className={`status status-${tone}`}>{children}</span> }
function App() {
  const [toast, setToast] = useState('')
  const [filter, setFilter] = useState('Semua')
  const act = (text) => { setToast(text); window.setTimeout(() => setToast(''), 1800) }
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="wordmark"><span className="wordmark-mark">R</span> Reimburse</div>
      <nav aria-label="Navigasi Requester">
        <a className="nav-item active" href="#dashboard"><span className="nav-icon">⌂</span>Dashboard</a>
        <a className="nav-item" href="#requests"><span className="nav-icon">▣</span>Pengajuan</a>
        <a className="nav-item" href="#help"><span className="nav-icon">?</span>Bantuan</a>
      </nav>
      <div className="sidebar-bottom"><button className="account-link" onClick={() => act('Profil Maya dibuka')}><span className="avatar">MA</span><span>Maya A.<small>Requester</small></span><span>⌄</span></button></div>
    </aside>
    <main className="content" id="dashboard">
      <header className="topbar"><div><p className="kicker">Requester dashboard</p><h1>Selamat pagi, Maya</h1><p className="lede">Ada 2 pengajuan yang perlu perhatianmu.</p></div><div className="top-actions"><button className="icon-button" aria-label="Notifikasi" onClick={() => act('Belum ada notifikasi baru')}>◌</button><button className="mobile-account" onClick={() => act('Profil Maya dibuka')}><span className="avatar">MA</span></button></div></header>
      <div className="dashboard-grid">
        <section className="panel attention-panel"><div className="panel-heading"><div><h2>Perlu perhatian</h2><p>Pengajuan ini membutuhkan tindakanmu sebelum diproses kembali.</p></div><span className="count">2</span></div>{requests.map((r) => <article className="request-row" key={r.id}><div className="request-copy"><div className="request-title"><strong>{r.title}</strong><Status tone={r.tone}>{r.status}</Status></div><p>{r.id} · {r.meta}</p><span className="next-step">Langkah berikutnya: {r.next}</span></div><div className="request-side"><strong className="amount">{r.amount}</strong><button className="row-action" onClick={() => act(`${r.title}: ${r.next}`)}>Buka</button></div></article>)}<button className="text-button" onClick={() => act('Daftar pengajuan dibuka')}>Lihat semua pengajuan <span>→</span></button></section>
        <section className="panel actions-panel"><div className="panel-heading"><div><h2>Buat pengajuan</h2><p>Pilih pekerjaan yang ingin dimulai.</p></div></div><div className="action-list"><button className="action-card primary-action" onClick={() => act('Form Reimbursement dibuka')}><span className="service-icon">▣</span><span><strong>Reimbursement</strong><small>Invoice dan bukti transaksi</small></span><span className="action-arrow">↗</span></button><button className="action-card" onClick={() => act('Form Payment Request dibuka')}><span className="service-icon">↗</span><span><strong>Payment Request</strong><small>Ajukan pembayaran vendor</small></span><span className="action-arrow">↗</span></button><button className="action-card" onClick={() => act('Form Overtime dibuka')}><span className="service-icon">◷</span><span><strong>Overtime</strong><small>Catat jam kerja tambahan</small></span><span className="action-arrow">↗</span></button></div></section>
        <section className="panel progress-panel"><div className="panel-heading"><div><h2>Status berjalan</h2><p>Alur request aktif dari pengiriman sampai pembayaran.</p></div></div><div className="progress"><div className="progress-step done"><i>✓</i><span>Dikirim</span></div><div className="progress-step current"><i>2</i><span>Finance review</span></div><div className="progress-step"><i>3</i><span>Approver</span></div><div className="progress-step"><i>4</i><span>Maker</span></div><div className="progress-step"><i>5</i><span>Paid</span></div></div><p className="progress-note"><b>2 pengajuan</b> sedang berada di Finance review.</p></section>
        <section className="panel recent-panel" id="requests"><div className="panel-heading recent-heading"><div><h2>Pengajuan terbaru</h2><p>Pengajuan terakhir yang kamu buat.</p></div><button className="filter-button" onClick={() => setFilter(filter === 'Semua' ? 'Aktif' : 'Semua')}>{filter}⌄</button></div>{recent.map((r) => <article className="recent-row" key={r.id}><span className="recent-icon">{r.tone === 'paid' ? '✓' : '◷'}</span><div><strong>{r.title}</strong><p>{r.id} · {r.meta}</p></div><Status tone={r.tone}>{r.status}</Status><strong className="amount">{r.amount}</strong></article>)}</section>
      </div>
    </main>
    {toast && <div className="toast" role="status">{toast}</div>}
  </div>
}
export default App
