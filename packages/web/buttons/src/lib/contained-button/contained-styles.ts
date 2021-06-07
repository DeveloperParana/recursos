import { css } from '@devpr/web-core'

export const containedStyles = css`
  button[is='contained-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='contained-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='contained-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='contained-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  .medium,
  button[is='contained-button'][size='medium'] {
    padding: 8px 12px;
  }

  .small,
  button[is='contained-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='contained-button'] {
    background-color: var(--blue-05);
    border-color: var(--blue-05);
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'] bs-icon {
    color: var(--blue-02);
    fill: var(--blue-02);
  }

  button[is='contained-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-blue-4dp-0-offset-x) * 1px)
        calc(var(--shadow-blue-4dp-0-offset-y) * 1px)
        calc(var(--shadow-blue-4dp-0-radius) * 1px)
        var(--shadow-blue-4dp-0-color)
    );
    background-color: var(--blue-04);
    border-color: var(--blue-04);
    color: var(--white);
    fill: var(--white);
  }

  button[is='contained-button']:hover bs-icon {
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'][type='submit']:disabled,
  button[is='contained-button'].cancel:disabled,
  button[is='contained-button'].delete:disabled,
  button[is='contained-button']:disabled {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit']:disabled:hover,
  button[is='contained-button'].cancel:disabled:hover,
  button[is='contained-button'].delete:disabled:hover,
  button[is='contained-button']:disabled:hover {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit'],
  button[is='contained-button'][type='submit']:hover {
    color: var(--green-01);
    fill: var(--green-01);
  }

  button[is='contained-button'][type='submit'] > bs-icon,
  button[is='contained-button'][type='submit']:hover > bs-icon {
    color: var(--green-02);
    fill: var(--green-02);
  }

  button[is='contained-button'].cancel,
  button[is='contained-button'].cancel:hover {
    color: var(--red-01);
    fill: var(--red-01);
  }

  button[is='contained-button'].cancel > bs-icon,
  button[is='contained-button'].cancel:hover > bs-icon {
    color: var(--red-02);
    fill: var(--red-02);
  }

  button[is='contained-button'].delete,
  button[is='contained-button'].delete:hover {
    color: var(--orange-01);
    fill: var(--orange-01);
  }

  button[is='contained-button'].delete > bs-icon,
  button[is='contained-button'].delete:hover > bs-icon {
    color: var(--orange-02);
    fill: var(--orange-02);
  }
`
