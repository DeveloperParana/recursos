import { css } from '@devpr/web-core'

export const shadedStyles = css`
  button[is='shaded-button'] {
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

  button[is='shaded-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='shaded-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='shaded-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='shaded-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='shaded-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='shaded-button'] {
    background-color: var(--light-grey);
    border-color: transparent;
    color: var(--blue-05);
    fill: var(--blue-05);
  }

  button[is='shaded-button'] bs-icon {
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  button[is='shaded-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-grey-4dp-0-offset-x) * 1px)
        calc(var(--shadow-grey-4dp-0-offset-y) * 1px)
        calc(var(--shadow-grey-4dp-0-radius) * 1px)
        var(--shadow-grey-4dp-0-color)
    );
    background-color: var(--white);
    border-color: var(--white);
    color: var(--blue-06);
    fill: var(--blue-06);
  }

  /* Disabled */
  button[is='shaded-button'][type='submit']:disabled,
  button[is='shaded-button'].cancel:disabled,
  button[is='shaded-button'].delete:disabled,
  button[is='shaded-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
    filter: none;
  }

  /* Disabled / Hover */
  button[is='shaded-button'][type='submit']:disabled:hover,
  button[is='shaded-button'].cancel:disabled:hover,
  button[is='shaded-button'].delete:disabled:hover,
  button[is='shaded-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit']:disabled bs-icon,
  button[is='shaded-button'].cancel:disabled bs-icon,
  button[is='shaded-button'].delete:disabled bs-icon,
  button[is='shaded-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit'],
  button[is='shaded-button'][type='submit']:hover {
    color: var(--green-06);
    fill: var(--green-06);
  }

  button[is='shaded-button'][type='submit'] > bs-icon,
  button[is='shaded-button'][type='submit']:hover > bs-icon {
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='shaded-button'].cancel,
  button[is='shaded-button'].cancel:hover {
    color: var(--red-06);
    fill: var(--red-06);
  }

  button[is='shaded-button'].cancel > bs-icon,
  button[is='shaded-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='shaded-button'].delete,
  button[is='shaded-button'].delete:hover {
    color: var(--orange-06);
    fill: var(--orange-06);
  }

  button[is='shaded-button'].delete > bs-icon,
  button[is='shaded-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`
