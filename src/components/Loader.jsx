// src/components/Loader.jsx
import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Oval
        height={60}
        width={60}
        color="#003566"
        secondaryColor="#001D3D"
        strokeWidth={4}
        strokeWidthSecondary={2}
        ariaLabel="loading"
      />
    </div>
  )
}

export default Loader
