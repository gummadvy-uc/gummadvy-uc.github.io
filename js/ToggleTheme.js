

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };
  return React.createElement(
    'div',
    { className: isDarkTheme ? 'dark-theme' : 'light-theme' },
    
    React.createElement('button', { onClick: toggleTheme }, 'Toggle Theme')
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
