import React from 'react';
import { ScrollView } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { useTheme } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

type RenderEmptyListProps = { isLoading: boolean; renderHeader(): void };

export default function RenderEmptyList(props: RenderEmptyListProps) {
  const { colors } = useTheme();

  const { isLoading, renderHeader } = props;

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {renderHeader()}
      {[...new Array(5)].map((_, index) => (
        <SkeletonContent
          key={index.toString()}
          isLoading={isLoading}
          containerStyle={{
            height: 200,
            width: '100%',
            backgroundColor: colors.WHITE_BG_COLOR,
            padding: 20,
            marginTop: 4,
            marginBottom: 4
          }}
          layout={[
            { width: RFValue(120), height: 20, marginBottom: 10 },

            { width: RFValue(200), height: 30, marginBottom: 6 },

            { width: RFValue(70), height: RFValue(25), marginTop: 20 },

            {
              width: RFValue(90),
              height: RFValue(25),
              marginTop: 30,
              position: 'absolute',
              left: RFValue(100),
              top: 75
            },

            { width: RFValue(100), height: RFValue(25), marginTop: 10 },

            {
              width: RFValue(30),
              height: RFValue(20),
              position: 'absolute',
              right: 35,
              top: 20
            },
            {
              width: RFValue(60),
              height: RFValue(60),
              position: 'absolute',
              right: 20,
              top: 70,
              borderRadius: RFValue(60 / 2)
            },
            {
              width: RFValue(60),
              height: RFValue(20),
              position: 'absolute',
              right: 20,
              bottom: 20
            }
          ]}
        ></SkeletonContent>
      ))}
    </ScrollView>
  );
}
