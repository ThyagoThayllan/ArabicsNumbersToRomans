import { useEffect, useState } from 'react'
import minhaFoto from './imgs/minhaFoto.jpg'
import styles from './App.module.css'
import { Skeleton } from '@mui/material';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState('');
  const [romanNumber, setRomanNumber] = useState('');

  const convertToRoman = () => {
    const romanNumerals = [
      'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'
    ];

    const arabicNumbers = [
      1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
    ];

    let result = '';
    let remainingNumber = parseInt(number, 10);

    for (let i = arabicNumbers.length - 1; i >= 0; i--) {
      while (remainingNumber >= arabicNumbers[i]) {
        result += romanNumerals[i];
        remainingNumber -= arabicNumbers[i];
      }
    }

    setRomanNumber(result);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      {isLoading
        ? (<Skeleton variant='rounded' width={683} height={400} sx={{bgcolor: '#1A1A1A'}}  />)
        : (
        <div className={styles.box}>
            <h1 className={styles.title}>Transforme Números Árabes para Números Romanos</h1>
            <div className={styles.form}>
              <input type="text" placeholder='Digite um número' value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <button onClick={convertToRoman} className={styles.button}>Tranformar</button>
            </div>
            {romanNumber
            ? (<p>{number} <span>é igual à</span> {romanNumber}</p>)
            : <p>1 <span>é igual a</span> I</p>}
        </div>
      )}

      <div className={styles.profile}>
        <div className={styles.iconeMenu}>☰</div>
        <p>Feito for <a href='https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/' target='_blank'>Thyago Thayllan</a></p>
        <img src={minhaFoto} alt="Foto de Thyago Thayllan" />
        <div className={styles.info}>
          <p className={styles.name}>Thyago Thayllan</p>
          <p className={styles.job}>Desenvolvedor Front-End</p>
        </div>
        <div className={styles.technologies}>
          <h2>Tecnologias</h2>
          <div>
           <ul>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>React Native</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttons}>
          <a target='_blank' className={styles.linkedin} href="https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/">LinkedIn</a>
          <a target='_blank' className={styles.github} href="https://github.com/ThyagoThayllan">GitHub</a>
        </div>
      </div>
    </div>
  )
}
