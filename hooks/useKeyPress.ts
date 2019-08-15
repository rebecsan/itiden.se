import React from 'react';

export function useKeyPress(
  targetKey: string,
  onKeyPressed?: (event: KeyboardEvent) => void
): boolean {
  const [keyPressed, setKeyPressed] = React.useState(false);

  function downHandler(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === targetKey) {
      setKeyPressed(true);
      if (onKeyPressed) {
        onKeyPressed(event);
      }
    }
  }

  const upHandler = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setKeyPressed(false);
      if (onKeyPressed) {
        onKeyPressed(event);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keyPressed;
}
