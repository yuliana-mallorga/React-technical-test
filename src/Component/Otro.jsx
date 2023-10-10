import { useCatImage } from '../hooks/useCatImage'
export function Otro () {
 const { imageUrl } = useCatImage({ fact: 'Ramdon fact' })

return(
<>
    { imageUrl && <img src={imageUrl}/> }
</>
)
}