import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Query } from 'react-apollo';
import commonStyle from '../Styles/common.style';
import themeStyle from '../Styles/theme.style';
import loader from "../Assets/Images/double-ring-loader.gif";
import Java_developers from "../graphQL_Queries/getAllJavadevelopers";
import { TouchableOpacity } from "react-native-gesture-handler";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    };
  }
  static navigationOptions = {
    title: 'Top Java developers',
    headerTitleStyle: {
      color: themeStyle.PRIMARY_COLOR,
    },
    headerStyle: {
      borderBottomWidth: 0,
      marginBottom: 10,
    },
    headerTintColor: themeStyle.PRIMARY_COLOR
  };

  _profileParams = ({
    name,
    avatarUrl,
    login,
    repositories,
    starredRepositories,
    projects
  }) => ({
    profilePic: avatarUrl,
    name,
    username: login,
    number_repo: repositories.totalCount,
    number_stars: starredRepositories.totalCount,
    number_projects: projects.totalCount
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={commonStyle.LeftAlignLayout}>
          <Query query={Java_developers}>
            {({ loading, data, error }) => {
              if (error) {
                console.log(error);
                return (
                  <View>
                    <Text>An Error Occured!</Text>
                  </View>
                );
              }
              if (loading) {
                return (
                  <View style={styles.loaderStyle}>
                    <Image source={loader} />
                  </View>
                );
              }
              if (data) {
                const { search } = data;
                return (
                  <FlatList
                    data={search.edges}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigate("Profile", this._profileParams(item.node))
                        }
                      >
                        <View style={styles.developerCardStyle}>
                          <Text style={styles.developerRankStyle}>{index}</Text>
                          <Image
                            source={{ uri: `${item.node.avatarUrl}` }}
                            style={styles.profileImageStyle}
                          />
                          <View style={styles.nameAndUsernameContainer}>
                            <Text style={styles.developerNameStyle}>
                              {item.node.name}
                            </Text>
                            <Text style={styles.developerUsernameStyle}>
                              @{item.node.login}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                );
              }
            }}
          </Query>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  profileImageStyle: {
    width: 63,
    height: 69,
    borderRadius: 8
  },
  developerCardStyle: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 20
  },
  developerRankStyle: {
    alignSelf: "center",
    marginRight: 15,
    marginLeft: 15,
    fontSize: 21,
    color: themeStyle.PRIMARY_COLOR,
  },
  nameAndUsernameContainer: {
    alignSelf: "center",
    marginLeft: 20,
    width: "70%"
  },
  developerNameStyle: {
    fontSize: 21,
  },
  developerUsernameStyle: {
    fontSize: 20,
    color: themeStyle.SECONDARY_COLOR,
  },
  loaderStyle: {
    height: "100%",
    width: "100%",
    margin: 150,
  },
});
