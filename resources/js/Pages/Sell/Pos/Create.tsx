import ButtonCancel from '@/features/Pos/ButtonCancel'
import PosButtonIcon from '@/features/Pos/PosButtonIcon'
import PosCard from '@/features/Pos/PosCard'
import PosContent from '@/features/Pos/PosContent'
import PosForm from '@/features/Pos/PosForm'
import PosTable from '@/features/Pos/PosTable'
import PosTitle from '@/features/Pos/PosTitle'
const Create = () => {
  return (
    <PosCard>
      <PosContent>
        <div className="grid items-center justify-between md:flex">
          <PosTitle />
          <PosButtonIcon />
        </div>
        <PosForm />
      </PosContent>
    </PosCard>
  )
}

export default Create
