import { useLocalStorageValue } from '@react-hookz/web';

function UseSettings() {
  const isFetchLogo = useLocalStorageValue('project_settings-list-fetch_logo', {
    defaultValue: false,
  });

  const sidebarStyleMode = useLocalStorageValue(
    'project_settings-layout-sidebar-style_mode',
    {
      defaultValue: 'rounded-all',
    }
  );
  const sidebarMiniMode = useLocalStorageValue(
    'project_settings-layout-sidebar-mini_mode',
    {
      defaultValue: false,
      initializeWithValue: false,
    }
  );
  const sidebarHoverMode = useLocalStorageValue(
    'project_settings-layout-sidebar-hover_mode',
    {
      defaultValue: false,
      initializeWithValue: false,
    }
  );
  const sidebarBoxedMode = useLocalStorageValue(
    'project_settings-layout-sidebar-boxed_mode',
    {
      defaultValue: false,
      initializeWithValue: false,
    }
  );
  const sidebarSheetMode = useLocalStorageValue(
    'project_settings-layout-sidebar-sheet_mode',
    {
      defaultValue: false,
      initializeWithValue: false,
    }
  );

  const isLightDarkThemeOnly = useLocalStorageValue(
    'project_settings-layout-theme-light_dark_only',
    {
      defaultValue: true,
    }
  );
  const currentThemeColor = useLocalStorageValue(
    'project_settings-layout-theme-color',
    {
      defaultValue: 'blue',
      initializeWithValue: false,
    }
  );

  return {
    sidebarStyleMode,
    sidebarMiniMode,
    sidebarHoverMode,
    sidebarBoxedMode,
    sidebarSheetMode,

    isLightDarkThemeOnly,
    currentThemeColor,
    isFetchLogo,
  };
}

export { UseSettings };
