import React from 'react';
import PageHeader from '../components/PageHeader';

const feeds = [
  {
    name: 'TIET Admin', initials: 'TA', role: 'Official', date: '3/15/2024', tag: 'Announcement',
    text: 'Exciting News! TIET has been ranked among the top engineering colleges in India by NIRF 2024. This reflects our commitment to academic excellence and innovation.'
  },
  {
    name: 'Dr. Sarah Johnson', initials: 'DSJ', role: 'Dean of Students', date: '3/12/2024', tag: 'Events',
    text: 'Registration for the Annual Tech Fest "Technovation 2024" is now open! Don\'t miss this opportunity to showcase your skills.'
  },
  {
    name: 'Campus Placement Cell', initials: 'CPC', role: 'Official', date: '3/10/2024', tag: 'Placements',
    text: 'Placement Update: Microsoft is visiting our campus next week! Positions include SDE, Data Scientist, and Product Manager.'
  },
  {
    name: 'Hostel Committee', initials: 'HC', role: 'Committee', date: '3/3/2024', tag: 'Hostel',
    text: 'Hostel Maintenance Schedule - March 2024. There might be temporary service interruptions. We appreciate your cooperation.'
  }
];

export default function Feeds() {
  return (
    <div>
      <PageHeader title="TIET Campus Feeds" subtitle="Stay updated with the latest news, announcements, and happenings around campus" />

      <div className="grid-1" style={{ display: 'grid', gap: 16 }}>
        {feeds.map((f, idx) => (
          <div className="card feed-card" key={idx}>
            <div className="feed-avatar">{f.initials}</div>
            <div className="feed-body">
              <div className="feed-head">
                <span className="feed-name">{f.name}</span>
                <span className="feed-role">{f.role}</span>
                <span style={{ color: 'var(--muted)', fontSize: 14 }}>{f.date}</span>
                <span className="feed-tag">{f.tag}</span>
              </div>
              <div style={{ marginTop: 8 }}>{f.text}</div>
              <div className="feed-footer">
                <span>❤️ 245</span>
                <span>💬 32</span>
                <span>↗ Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


