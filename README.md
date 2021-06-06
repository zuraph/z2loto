# SlotMaster

## Import

```javascript
//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons and react-transition-group for animations.

```json
dependencies: {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-transition-group": "^4.4.1",
    "primeicons": "^4.1.0"
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/saga-blue/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## QuickStart

An [example application](https://github.com/primefaces/primereact-quickstart) based on create-react-app is available at github.

