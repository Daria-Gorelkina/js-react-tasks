import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    handleThemeChange = (theme) => {
        this.context.setTheme(theme);
    };

    render() {
        const { themes, theme } = this.context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map((_theme) => (
                    <ToggleButton
                        key={_theme.id}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={_theme.id}
                        checked={
                            _theme.id === theme.id}
                        onClick={() => this.handleThemeChange(_theme)}
                    >
                        {_theme.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;
