import React from 'react';
import PageHeader from '../components/PageHeader';

const items = [
  { item: 'Black Wallet', location: 'Library - 2nd Floor', date: 'Mar 12, 2024', contact: 'john@example.com' },
  { item: 'Water Bottle - Blue', location: 'Main Auditorium', date: 'Mar 10, 2024', contact: '+91-98765-43210' },
  { item: 'Casio Calculator', location: 'ECE Block - Room 301', date: 'Mar 08, 2024', contact: 'ece-office@tiet.edu' }
];

export default function LostAndFound() {
  return (
    <div>
      <PageHeader title="Lost & Found" subtitle="Recently reported items around campus" />
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', gap: 12, fontWeight: 700 }}>
          <div>Item</div><div>Location</div><div>Date</div><div>Contact</div>
        </div>
        <div style={{ height: 8 }} />
        {items.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 2fr', gap: 12, padding: '10px 0', borderTop: '1px solid #f1f2f5' }}>
            <div>{r.item}</div>
            <div>{r.location}</div>
            <div>{r.date}</div>
            <div>{r.contact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


