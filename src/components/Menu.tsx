import { useCallback, useEffect, useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const onOverlayClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('body')[0].style = 'overflow:hidden';
    } else {
      document.getElementsByTagName('body')[0].style = '';
    }
  }, [isOpen]);

  return (
    <>
      <div className="navigation-menu">
        {
          !isOpen ? (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          ) : (
            <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          )
        }
      </div>
      {
        isOpen && (
          <>
            <div className="navigation-overlay" onClick={onOverlayClick}></div>
            <ul className="navigation-list">
              <li>
                <a href="/craft-and-code">
                  Home
                </a>
              </li>
              <li>
                <a href="/craft-and-code/ttrpgs">
                  TTRPGs
                </a>
              </li>
              <li>
                <a href="/craft-and-code/photography">
                  Photography
                </a>
              </li>
              <li>
                <a href="/craft-and-code/blog">
                  Blog
                </a>
              </li>
            </ul>
          </>
        )
      }
    </>
  );
}

export default Menu;
