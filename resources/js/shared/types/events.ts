import { ChangeEvent as ReactChangeEvent, FormEvent as ReactFormEvent } from 'react'

export type ChangeEvent = ReactChangeEvent<
  HTMLFormElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
>

export type FormEvent = ReactFormEvent<
  HTMLFormElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
>
