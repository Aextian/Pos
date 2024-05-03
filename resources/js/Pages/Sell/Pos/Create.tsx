import ButtonCancel from '@/Components/Pos/ButtonCancel'
import PosButtonIcon from '@/Components/Pos/PosButtonIcon'
import PosCard from '@/Components/Pos/PosCard'
import PosContent from '@/Components/Pos/PosContent'
import PosForm from '@/Components/Pos/PosForm'
import PosTable from '@/Components/Pos/PosTable'
import PosTitle from '@/Components/Pos/PosTitle'
const Create = () => {
  return (
    <PosCard>
      <PosContent>
        <PosTitle />
        <PosButtonIcon />
        <PosForm />
      </PosContent>
    </PosCard>
  )
}

export default Create
