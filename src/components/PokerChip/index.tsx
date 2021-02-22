import React, { PropsWithChildren, useEffect, useState } from 'react';
import './styles.scss';
import NumberFormat from 'react-number-format';

interface Props {
  styles?: React.CSSProperties;
  amount: number;
  ilustrativeBet?: boolean;
  bigBlindAmount: number;
}

const PokerChip : React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const {
    styles,
    amount,
    ilustrativeBet,
    bigBlindAmount,
  } = props;

  const [c1000000, setC1000000] = useState(0);
  const [c500000, setC500000] = useState(0);
  const [c250000, setC250000] = useState(0);
  const [c150000, setC150000] = useState(0);
  const [c50000, setC50000] = useState(0);
  const [c10000, setC10000] = useState(0);
  const [c1000, setC1000] = useState(0);
  const [c100, setC100] = useState(0);
  const [c10, setC10] = useState(0);
  const [c1, setC1] = useState(0);

  useEffect(() => {
    let tempAmount = amount;

    const t1000000 = Math.trunc(tempAmount / 1000000);
    tempAmount -= 1000000 * t1000000;
    const t500000 = Math.trunc(tempAmount / 500000);
    tempAmount -= 500000 * t500000;
    const t250000 = Math.trunc(tempAmount / 250000);
    tempAmount -= 250000 * t250000;
    const t150000 = Math.trunc(tempAmount / 150000);
    tempAmount -= 150000 * t150000;
    const t50000 = Math.trunc(tempAmount / 50000);
    tempAmount -= 50000 * t50000;
    const t10000 = Math.trunc(tempAmount / 10000);
    tempAmount -= 10000 * t10000;
    const t1000 = Math.trunc(tempAmount / 1000);
    tempAmount -= 1000 * t1000;
    const t100 = Math.trunc(tempAmount / 100);
    tempAmount -= 100 * t100;
    const t10 = Math.trunc(tempAmount / 10);
    tempAmount -= 10 * t10;
    const t1 = Math.trunc(tempAmount / 1);
    tempAmount -= 1 * t1;

    if (tempAmount !== 0) {
      console.error('Your calc is wrong, must left 0 but got', tempAmount);
    }

    setC1000000(t1000000);
    setC500000(t500000);
    setC250000(t250000);
    setC150000(t150000);
    setC50000(t50000);
    setC10000(t10000);
    setC1000(t1000);
    setC100(t100);
    setC10(t10);
    setC1(t1);
  }, [amount]);

  const bigBlindsLegend = Math.round(((amount / bigBlindAmount) + Number.EPSILON) * 100) / 100;

  if (amount === 0) {
    return (
      <div />
    );
  }

  return (
    <div className="poker-chip" style={styles}>
      {
        ilustrativeBet
          ? (
            <div className="stacks ilustrative">
              <div className="chip-stack">
                <div className="ilustrative chip-box">
                  <div className="chip">
                    <div>
                      <div className="inner-circle" />
                      {bigBlindsLegend}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          : (
            <div className="stacks">
              {
                c1000000 > 0
                  ? (
                    <div className="chip-stack">
                      {Array.from({ length: c1000000 }, (v, k) => k).map((v, i) => (
                        <div key={v} className="c1000000 chip-box" style={{ top: i * 5 * -1 }}>
                          <div className="chip">
                            <div>
                              <div className="inner-circle" />
                              1M
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null
              }
              {
                c500000 > 0
                  ? (
                    <div className="chip-stack">
                      {Array.from({ length: c500000 }, (v, k) => k).map((v, i) => (
                        <div key={v} className="c500000 chip-box" style={{ top: i * 5 * -1 }}>
                          <div className="chip">
                            <div>
                              <div className="inner-circle" />
                              500K
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null
              }
              {
                c250000 > 0
                  ? (
                    <div className="chip-stack">
                      {Array.from({ length: c250000 }, (v, k) => k).map((v, i) => (
                        <div key={v} className="c250000 chip-box" style={{ top: i * 5 * -1 }}>
                          <div className="chip">
                            <div>
                              <div className="inner-circle" />
                              250K
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null
              }
              {
                c150000 > 0
                  ? (
                    <div className="chip-stack">
                      {Array.from({ length: c150000 }, (v, k) => k).map((v, i) => (
                        <div key={v} className="c150000 chip-box" style={{ top: i * 5 * -1 }}>
                          <div className="chip">
                            <div>
                              <div className="inner-circle" />
                              150K
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null
              }
              {
              c50000 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c50000 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c50000 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            50K
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
              {
              c10000 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c10000 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c10000 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            10K
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
              {
              c1000 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c1000 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c1000 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            1K
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
              {
              c100 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c100 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c100 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            100
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
              {
              c10 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c10 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c10 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            10
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
              {
              c1 > 0
                ? (
                  <div className="chip-stack">
                    {Array.from({ length: c1 }, (v, k) => k).map((v, i) => (
                      <div key={v} className="c1 chip-box" style={{ top: i * 5 * -1 }}>
                        <div className="chip">
                          <div>
                            <div className="inner-circle" />
                            1
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null
            }
            </div>
          )
      }
      {
        amount > 0
          ? (
            <div className="total-prize">
              <span><NumberFormat value={amount} displayType="text" thousandSeparator prefix="" /></span>
            </div>
          ) : null
      }

    </div>
  );
};

export default PokerChip;
