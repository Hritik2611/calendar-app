import Calendar from "./components/Calendar"
import Notes from "./components/Notes"
function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">

      <div className="max-w-4xl mx-auto mb-6">
        <img
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
          alt="calendar"
          className="w-full h-40 object-cover rounded-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
        <Calendar />
        <Notes />
      </div>

    </div>
    </>
  );
}

export default App
