import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Date().toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/London',
          })
        );
      } catch {
        setTime('');
      }
    };
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-bar">
        <span>&#169; {new Date().getFullYear()} Ben King</span>
        <span>London &#183; {time} GMT</span>
        <a href="#top">Back to top &#8593;</a>
      </div>
    </footer>
  );
}
