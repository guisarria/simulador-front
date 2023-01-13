import React from 'react'
import { useNavigate } from 'react-router-dom'

import { goToIndex } from '@/routes/coordinator'
import error404Img from '@/img/error404.webp'

const Error = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    goToIndex(navigate)
  }

  return (
    <div
      role="alert"
      className={styles.errorPage}
    >
      <p className={styles.error}
      >
        This page did not exists
      </p>
      <img className={styles.errorImage}
        src={error404Img}
        alt="Broken robot 404 error"
      />
      <button className={styles.backToHomeBtn}
        onClick={handleBackToHome}
      >
        Back to home
      </button>
    </div>
  )
}

export default Error