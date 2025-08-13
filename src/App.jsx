

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
