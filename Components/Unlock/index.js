import {useState} from 'react'
import {MainContainer, Button, Image, ParagraphMsg} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const onChangeButton = () => {
    if (lock === true) {
      setLock(prevState => !prevState)
    } else {
      setLock(prevState => !prevState)
    }
  }

  const value = lock === true ? 'Unlock' : 'Lock'
  const imageUrl =
    lock === true
      ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
      : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  return (
    <MainContainer>
      <Image src={imageUrl} alt={lock === true ? 'lock' : 'unlock'} />
      <ParagraphMsg>
        Your Device is {lock === true ? 'Locked' : 'Unlocked'}
      </ParagraphMsg>

      <Button onClick={onChangeButton}>{value}</Button>
    </MainContainer>
  )
}
export default Unlock
