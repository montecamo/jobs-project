import { injectGlobal } from 'styled-components';
import LatoLight from '../../fonts/Lato-Light.ttf';
import Lato from '../../fonts/Lato-Regular.ttf';
import Mongolian from '../../fonts/monbaiti.ttf';

injectGlobal`
  @font-face {
    font-family: LatoLight;
    src: url('${LatoLight}') format('opentype');
  };

  @font-face {
    font-family: Lato;
    src: url('${Lato}') format('opentype');
  };

  @font-face {
    font-family: Baiti;
    src: url('${Mongolian}') format('opentype');
  };
`;
