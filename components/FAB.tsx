import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string
  onPress?: () => void
  onLongPress?: () => void
  positions?: 'left' | 'rigth'
}

export default function FAB({
  label, 
  onPress, 
  onLongPress, 
  positions
}: Props) {
  
  return (
    <Pressable
      
      onPress={onPress}
      onLongPress={onLongPress}
      style={ ({pressed}) => [
        styles.floatingButton, 
        positions === 'rigth' ? styles.rigth : styles.left,
        pressed ? { opacity: 0.5 } : { opacity: 1 }
      ]}
      
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  )
}
//No esta mal para ser un comienzo pero la linea de arriba esta mejor
// export default function FAB({
//   label, 
//   onPress, 
//   onLongPress, 
//   positions
// }: Props) {
  
//   if(positions=="left"){
//     return (
//       <Pressable
//         onPress={onPress}
//         onLongPress={onLongPress}
//         style={[styles.floatingButton, styles.left]}
//       >
//         <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
//       </Pressable>
//     )
//   }else{
//     return (
//       <Pressable
//         onPress={onPress}
//         onLongPress={onLongPress}
//         style={[styles.floatingButton, styles.rigth]}
//       >
//         <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
//       </Pressable>
//     )
//   }
// }

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  left:{
    left:20
  },
  rigth:{
    right:20
  },
  Opacidad:{
    opacity: 0.1
  }
})