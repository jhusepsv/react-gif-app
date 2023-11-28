import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en el nombre del componente', () => { 

   const title = 'Saitama';
   const url = 'https://one-punch.com/saitama.jpg'

   test('debe hacer march con el snapshot', () => { 
      const { container } = render(<GifGridItem title={title} url={url}/>);
      expect(container).toMatchSnapshot();
   });

   test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
      render(<GifGridItem title={title} url={url}/>);
      // screen.debug();
      // expect( screen.getByRole( 'img' ).src ).toBe( url );
      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
   });

   test('debe mostrar el titulo en el componente', () => { 
      render(<GifGridItem title={title} url={url}/>);
      expect( screen.getByText(title) ).toBeTruthy();
   });

});
