import { css } from '@devpr/web-core'

export const textStyles = css`
  button[is='text-button'] {
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

  button[is='text-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='text-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='text-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='text-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='text-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='text-button'] {
    background-color: var(--white);
    border-color: transparent;
    color: var(--grey-05);
    fill: var(--grey-05);
  }

  button[is='text-button']:hover {
    background-color: var(--grey-01);
    border-color: var(--grey-01);
    color: var(--black);
    fill: var(--black);
  }

  /* Icon */
  button[is='text-button'] bs-icon,
  button[is='text-button']:hover bs-icon {
    border-color: transparent;
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  /* Disabled */
  button[is='text-button'][type='submit']:disabled,
  button[is='text-button'].cancel:disabled,
  button[is='text-button'].delete:disabled,
  button[is='text-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  /* Disabled / Hover */
  button[is='text-button'][type='submit']:disabled:hover,
  button[is='text-button'].cancel:disabled:hover,
  button[is='text-button'].delete:disabled:hover,
  button[is='text-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='text-button'][type='submit'] > bs-icon,
  button[is='text-button'][type='submit']:hover > bs-icon {
    border-color: transparent;
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='text-button'].cancel > bs-icon,
  button[is='text-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='text-button'].delete > bs-icon,
  button[is='text-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`
