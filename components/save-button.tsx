import { SaveIcon, Loader2Icon } from "lucide-react"
import { Button } from "./ui/button"

    type saveButtonProps = {
        isPending: boolean
    }
export function SaveButton({isPending}:saveButtonProps){

    return(
        <>
        <Button type="submit">
            {isPending?
            <> <Loader2Icon className="animate-spin"/> Aguarde... </> :
            <> <SaveIcon /> salvar </>}            
            
          </Button>
        </>
    )
}