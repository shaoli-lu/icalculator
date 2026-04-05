import React from 'react';

export default function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>How to Use iCalculator</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <section>
            <h3><span className="icon">💰</span> Initial Investment</h3>
            <p>The total amount of money you are starting with. This is your seed capital.</p>
          </section>
          
          <section>
            <h3><span className="icon">📈</span> Annual Investment</h3>
            <p>The amount you plan to add to your investment every year. Consistency is key to long-term growth!</p>
          </section>
          
          <section>
            <h3><span className="icon">📊</span> Expected Return</h3>
            <p>The average annual percentage of profit you expect. Historical market averages vary (e.g., S&P 500 is ~10%).</p>
          </section>
          
          <section>
            <h3><span className="icon">⏳</span> Duration</h3>
            <p>The number of years you plan to hold your investment. Enter 1 or more to see the projection.</p>
          </section>

          <section className="pro-tip">
            <p><strong>Pro Tip:</strong> Compound interest works best over longer periods. Try increasing the duration to see the "snowball effect" in action!</p>
          </section>

          <section className="disclaimer">
            <p><strong>Disclaimer:</strong> Past performance does not represent future results. No guarantees are made. This tool is for compound interest education only.</p>
          </section>
        </div>
        <div className="modal-footer">
          <button className="done-btn" onClick={onClose}>Got it!</button>
        </div>
      </div>
    </div>
  );
}
