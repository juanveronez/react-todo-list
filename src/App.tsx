import Text from "./components/text";
import Icon from "./components/icon";
import CheckIcon from './assets/icons/check.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import TrashIcon from './assets/icons/trash.svg?react'
import XIcon from './assets/icons/x.svg?react'
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";

export default function App() {
  return (
    <div className="grid gap-3 p-4">
      <div className="flex flex-col gap-2">
        <Text as="h1" variant="body-md-bold">Hello World!</Text>
        <Text variant="body-sm-bold">Hello World!</Text>
        <Text as="p" className="text-pink-base">Hello World!</Text>
      </div>
      <div className="flex gap-2">
        <Icon svg={CheckIcon} className="fill-gray-300" />
        <Icon svg={PencilIcon} className="fill-pink-base" />
        <Icon svg={PlusIcon} className="fill-pink-dark" />
        <Icon svg={SpinnerIcon} animate className="fill-gray-400" />
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-dark" />
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
      </div>
      <div className="flex gap-2">
        <Button>Teste</Button>
        <Button icon={PlusIcon}>Teste</Button>
        <Button disabled icon={PlusIcon}>Teste</Button>
      </div>
      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="secondary" disabled />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" disabled />
      </div>
      <InputText />
      <div className="flex gap-2">
        <InputCheckbox />
        <InputCheckbox disabled />
      </div>
    </div>
  )
}
