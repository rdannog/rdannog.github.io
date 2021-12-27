import React from 'react';
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'
import Themes from '../../theme'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            footers {
                copyright
              }
          }
        }
    `)
    const { copyright } = data.alldata.footers[0]
    return (
        <S.Container>
                <S.Content >
                    <Themes/>
                </S.Content>
                <S.Copyright>
                    <p>{copyright}</p>
                </S.Copyright>
        </S.Container>
    )
}
