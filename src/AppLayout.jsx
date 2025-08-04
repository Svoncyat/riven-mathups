import React from 'react'
import { MatchupInfo } from './MatchupInfo.jsx'

export function AppLayout() {
    return (
        <section className='App'>
            <MatchupInfo matchupId="aatrox" />
            <MatchupInfo matchupId="akali" />
            <MatchupInfo matchupId="akshan" />
        </section>
    )
}