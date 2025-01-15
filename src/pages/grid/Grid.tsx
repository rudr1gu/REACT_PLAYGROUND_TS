function Grid() {
  return (
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-gray-800 rounded-xl">1</div>
        <div className="bg-blue-700 rounded-xl">2</div>
        <div className="bg-green-700 rounded-xl">3</div>
        <div className="bg-red-600 col-span-2 rounded-xl">4</div>
        <div className="bg-amber-600 rounded-xl">5</div>
      </div>
  );
}

export default Grid;