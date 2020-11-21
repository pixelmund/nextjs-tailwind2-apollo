import { useTheme } from 'next-themes';

function IndexPage() {
  const theme = useTheme();

  function switchTheme() {
    if (theme.resolvedTheme === 'dark') {
      return theme.setTheme('light');
    }
    theme.setTheme('dark');
  }
  return (
    <div>
      <div>Hello world</div>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}

export default IndexPage;
