import styles from './about.module.css'

type AboutButtonProps = {
  content: string
  anchor?: boolean
}

export default function AboutButton({ content, anchor }: AboutButtonProps) {
  return (
    <button className={styles.button}>
      {content}{' '}
      {anchor ? (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrow}
        >
          <path
            d="M10.2932 6.707L7.00021 10V0H5.00021V10L1.70721 6.707L0.293213 8.121L4.58621 12.414C4.96127 12.7889 5.46988 12.9996 6.00021 12.9996C6.53054 12.9996 7.03916 12.7889 7.41421 12.414L11.7072 8.121L10.2932 6.707Z"
            fill="#2C2F32"
          />
        </svg>
      ) : (
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrow}
        >
          <path
            d="M6.707 1.70703L10 5.00003L-2.93172e-07 5.00003L-2.0575e-07 7.00003L10 7.00003L6.707 10.293L8.121 11.707L12.414 7.41403C12.7889 7.03897 12.9996 6.53036 12.9996 6.00003C12.9996 5.4697 12.7889 4.96109 12.414 4.58603L8.121 0.293029L6.707 1.70703Z"
            fill="#2C2F32"
          />
        </svg>
      )}
    </button>
  )
}
