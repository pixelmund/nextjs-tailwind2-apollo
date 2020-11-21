import { useTheme } from 'next-themes';
import Input from '../components/ui/Inputs/Input';
import Label from '../components/ui/Label';

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
      <div>
        <Label htmlFor="test">E-Mail</Label>
        <Input id="test" name="test" placeholder="E-Mail" />
      </div>
    </div>
  );
}

export default IndexPage;
