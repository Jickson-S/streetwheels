export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img src="/logo.png" alt="Loading" className="w-24 animate-pulse" />
    </div>
  );
}