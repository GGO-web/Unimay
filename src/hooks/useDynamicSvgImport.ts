import { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const importSvgIcon = async (): Promise<void> => {
    try {
      importedIconRef.current = (
        await import(`../assets/svg/${iconName}.svg`)
      ).ReactComponent;
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
