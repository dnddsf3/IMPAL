import React, { useState } from 'react';

const TokenPay = () => {
  const [step, setStep] = useState(1);

  const nextStep = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div className="tp-container">
      {/* Hero Section */}
      <div className="tp-hero">
        <h1>TokenPay</h1>
      </div>

      {/* Progress Bar */}
      <div className="tp-progress-bar">
        <div className="tp-steps">
          <div className={`tp-step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`tp-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`tp-step ${step >= 3 ? 'active' : ''}`}>3</div>
          <div className={`tp-step ${step >= 4 ? 'active' : ''}`}>4</div>
        </div>
        <div className="tp-progress-line">
          <div className="tp-progress" style={{ width: `${(step - 1) * 33.33}%` }}></div>
        </div>
      </div>

      {/* Step 1: Welcome */}
      {step === 1 && (
        <div className="tp-step-form">
          <h2>Welcome to TokenPay</h2>
          <p>Let's get started by selecting your payment method.</p>
          <button className="tp-primary-button" onClick={() => nextStep(2)}>
            Start
          </button>
        </div>
      )}

      {/* Step 2: Denomination Selection */}
      {step === 2 && (
        <div className="tp-step-form">
          <h2>Pilih Nominal</h2>
          <div className="tp-denomination-grid">
            <button className="tp-denomination-button" onClick={() => nextStep(3)}>
              <div>Rp 20.000</div>
              <div className="kwh">13 kWh</div>
            </button>
            <button className="tp-denomination-button" onClick={() => nextStep(3)}>
              <div>Rp 50.000</div>
              <div className="kwh">33 kWh</div>
            </button>
            <button className="tp-denomination-button" onClick={() => nextStep(3)}>
              <div>Rp 100.000</div>
              <div className="kwh">66 kWh</div>
            </button>
            <button className="tp-denomination-button" onClick={() => nextStep(3)}>
              <div>Rp 200.000</div>
              <div className="kwh">133 kWh</div>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <div className="tp-step-form">
          <h2>Payment Details</h2>
          <input type="text" placeholder="Enter your payment details" />
          <button className="tp-payment-button" onClick={() => nextStep(4)}>
            Confirm Payment
          </button>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="tp-step-form">
          <h2>Payment Successful</h2>
          <p>Your payment has been processed. Thank you for using TokenPay!</p>
          <button className="tp-primary-button" onClick={() => nextStep(1)}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default TokenPay;
