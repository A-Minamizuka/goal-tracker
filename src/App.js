import { useState, useEffect } from 'react';

function App() {
  // 🛠 ローカルストレージから初期値を取得
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem('goals');
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');

  // 📝 goalsが変更されたら保存
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (input.trim() === '') return;
    setGoals([...goals, input]);
    setInput('');
  };

  const deleteGoal = (index) => {
    const updated = [...goals];
    updated.splice(index, 1);
    setGoals(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯 今日の目標</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="目標を入力"
      />
      <button onClick={addGoal}>追加</button>

      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal}{' '}
            <button onClick={() => deleteGoal(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
