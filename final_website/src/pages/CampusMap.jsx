import React from 'react';
import PageHeader from '../components/PageHeader';

export default function CampusMap() {
  return (
    <div>
      <PageHeader
        title="Campus Map"
        subtitle="Navigate the campus with our interactive map (placeholder)."
      />

      <div className="grid-2">
        <div className="card map-area">Interactive Campus Map (placeholder)</div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Search building</h3>
          <input placeholder="Enter building name" style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid #e5e7eb' }} />
          <div style={{ height: 10 }} />
          <button className="button primary" style={{ width: '100%' }}>Search</button>
        </div>
      </div>
    </div>
  );
}


