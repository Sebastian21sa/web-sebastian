import {
  SiPython,
  SiTensorflow,
  SiFlask,
  SiReact,
  SiDocker,
  SiOpencv,
} from 'react-icons/si'
import { IconType } from 'react-icons'

export const iconosStack: Record<string, IconType> = {
  Python: SiPython,
  TensorFlow: SiTensorflow,
  Flask: SiFlask,
  React: SiReact,
  Docker: SiDocker,
  OpenCV: SiOpencv,
}

export const coloresStack: Record<string, string> = {
  Python: '#3776AB',
  TensorFlow: '#FF6F00',
  Flask: '#ffffff',
  React: '#61DAFB',
  Docker: '#2496ED',
  OpenCV: '#5C3EE8',
  MediaPipe: '#00A0DC',
}
