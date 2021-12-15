import React from 'react';
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            footers {
                top
                copyright
              }
          }
        }
    `)
    const { top, copyright } = data.alldata.footers[0]
    return (
        <S.Container>
                <S.Content >
                    <button>{top}</button>
                </S.Content>
                <S.Copyright>
                    <p>{copyright}</p>
                </S.Copyright>
        </S.Container>
    )
}
