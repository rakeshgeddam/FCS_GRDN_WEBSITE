import React, { useState } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mojjvpbp', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          message: 'New beta request from waitlist',
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError('Failed to send request. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError('');
    setName('');
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-brandDarkGray rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-white/10">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {success ? (
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-2xl font-black mb-4 text-white uppercase font-heading">
              Request Submitted!
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Please look for a mail with instructions to test the beta version
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-brandRed text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-black mb-6 text-white uppercase font-heading">
              Join the Waitlist
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-brandBlack border border-white/20 text-white placeholder-gray-600 focus:outline-none focus:border-brandRed transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-brandBlack border border-white/20 text-white placeholder-gray-600 focus:outline-none focus:border-brandRed transition-colors"
                />
              </div>

              {error && (
                <div className="text-brandRed text-sm font-semibold p-3 bg-red-500/10 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brandRed text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-red-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Request for Beta Version'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
