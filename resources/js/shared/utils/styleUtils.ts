export const selectTheme = (theme: { colors: any }) =>
  ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'rgb(6 182 212 / 0.5)',
      primary: 'rgb(6 182 212 / 1)',
    },
  }) as any

export const primarySelectStyle = {
  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
    background: '#fff',
    minHeight: '34px',
    height: '34px',
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: '34px',
    padding: '0 6px',
  }),

  input: (provided: any, state: any) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state: any) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: '34px',
  }),
}

export const secondarySelectStyle = {
  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
    background: '#fff',
    minHeight: '34px',
    height: '34px',
    boxShadow: state.isFocused ? null : null,
    borderRadius: 0, // Set border radius to 0
  }),

  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: '34px',
    padding: '0 6px',
  }),

  input: (provided: any, state: any) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state: any) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: '34px',
  }),
}
