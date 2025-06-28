import Colors from './Colors';

function App() {
  const colorList = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  return (
    <div>
      <h1>Lista colori</h1>
      <Colors colors={colorList} />
    </div>
  );
}

export default App;
